export const CheckLogged = (req, res, next) => {

    if (!req.session.name) {

        res.status(403).send("You need to login first");
    }

    if (!(req.session.adm && req.session.prof)) {

        const header = "./partials/HeaderLogAluno.ejs";
        res.locals.username = req.session.name;
        res.locals.header = header;
    }
    if (req.session.prof) {

        const header = './partials/HeaderLogProf.ejs';
        res.locals.username = req.session.name;
        res.locals.header = header;
    }
    if (req.session.adm) {

        const header = './partials/HeaderLogADM.ejs';
        res.locals.username = req.session.name;
        res.locals.header = header;
    }

    console.log("you're logged");
    next();

};

export const CheckProf = (req, res, next) => {

    if ((req.session.prof && !req.session.adm) || (req.session.prof && req.session.adm)) {

        next();
    } else if (req.session.adm) {

        next()
    } else {

        res.status(403).send("you aren't a teacher");
    }
};

export const CheckAdmin = (req, res, next) => {

    if (req.session.adm) {
        console.log("you're logged as admin");
        next();
    } else {

        res.status(403).send("you aren't an admin");
    }
};
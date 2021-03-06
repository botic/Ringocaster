var {Response} = require("ringo/webapp/response"),
    fs = require("fs"),
    config = require("./config"),
    log = require("ringo/logging").getLogger(module.id);

function readPodcast() {
    var fileName = config.podcastFile;
    var fileContent = fs.read(fileName, "r");
    return JSON.parse(fileContent);
};

exports.index = function (req) {
    return Response.skin(module.resolve('skins/base.html'), readPodcast());
};

exports.podcast_xml = function (req) {
    return Response.skin(module.resolve('skins/podcast.xml'), readPodcast());
};

exports.admin = function (req) {
    return Response.skin(module.resolve('skins/admin.html'), readPodcast());
};
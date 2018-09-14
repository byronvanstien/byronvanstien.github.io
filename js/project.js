class Project {
    /**
     * @param {object} data
     * @param {string} data.name
     * @param {string} data.tagline
     * @param {string} data.description
     * @param {URLAbstraction} data.urls
     * @param {string} data.language
     * @param {array} data.technologies
     */
    constructor (data) {
        this.name = data.name;
        this.tagline = data.tagline
        this.description = data.description;
        this.urls = URLAbstraction({
            githubURL: data.urls.githubURL,
            websiteURL: data.urls.websiteURL
        })
        this.language = data.language,
        this.technologies = data.technologies
    }
}

class URLAbstraction {
    /**
     * @param {object} urls
     * @param {githubURL} urls.githubURL
     * @param {websiteURL} urls.websiteURL
     */
     constructor (urls) {
        this.githubURL = urls.githubURL;
        this.websiteURL = urls.websiteURL;
     }
}

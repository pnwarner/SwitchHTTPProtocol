/**
 * Class representing a protocol switcher for a given site address.
 */
class SwitchHTTPProtocol {
    /**
     * Create a protocol switcher.
     * @param {Object} options - The options for the protocol switcher. Blank defaults to current address
     * @param {string} [options.siteAddress=""] - The site address to switch the protocol for. 
     * @param {boolean} [options.httpToHttps=true] - Whether to switch from HTTP to HTTPS.
     * @param {Function} [options.callback=() => {}] - The callback function to execute after switching the protocol.
     */
    constructor({ siteAddress = "", httpToHttps = true, callback = () => {} }) {
        this.siteAddress = siteAddress || window.location.href.split('//')[1];
        this.targetProtocol = httpToHttps ? 'https' : 'http';
        this.callback = callback;
        this.checkProtocol();
    }

    /**
     * Change the protocol of the site address.
     * @throws Will throw an error if the site address is not provided or is in an invalid format.
     * @returns {boolean} Returns false if an error occurs.
     */
    changeProtocol() {
        try {
            if (!this.siteAddress) {
                throw new Error("Site address is required.");
            }

            const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;=]*)?$/;
            const isValidUrl = (url) => urlPattern.test(url);

            if (!isValidUrl(this.siteAddress)) {
                throw new Error("Invalid URL format.");
            }

            window.location.href = `${this.targetProtocol}://${this.siteAddress}`;
        } catch (error) {
            console.error('Error changing protocol:', error);
            return false;
        }
    }

    /**
     * Check the current protocol and switch if necessary.
     */
    checkProtocol() {
        const currentProtocol = window.location.protocol.slice(0, -1);

        if (currentProtocol !== this.targetProtocol) {
            this.changeProtocol();
        } else {
            this.callback();
        }
    }
}
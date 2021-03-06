module.exports = {
    apps: [{
        name: "DiyJBot",
        version: "1.0",
        cwd: "..",
        script: "python",
        args: "-m jbot",
        autorestart: true,
        watch: ["jbot"],
        ignore_watch: [
            "jbot/__pycache__/*",
            "jbot/bot/__pycache__/*",
            "jbot/diy/__pycache__/*",
            "jbot/*.log",
            "jbot/*/*.log",
            "jbot/requirements.txt",
            "jbot/ecosystem.config.js"
        ],
        watch_delay: 15000,
        interpreter: ""
    }]
}

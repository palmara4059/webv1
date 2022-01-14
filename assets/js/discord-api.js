let template = `<div style="font-size:1em">{{onlineUsers}} </div></div>`
  
function discordAPI(el) {
    const init = {
        method: 'GET',
        mode: 'cors',
        cache: 'reload'
    }
    fetch('https://discord.com/api/guilds/929116205674016768/widget.json', init).then(function (response) {
        if (response.status != 200) {
            console.log("it didn't work" + response.status);
            return
        }
        response.json().then(function (data) {
            new WidgetDiscord(data,"#widgetDiscord");
        })
    })
        .catch(function (err) {
            console.log('fetch error: ' + err)
        })
}

discordAPI()

class WidgetDiscord {

    constructor(data, el) {
        this.template = template
        this.channels = data.channels;
        this.users = data.members;
        this.onlineUsers = data.presence_count;
        this.serverName = data.name;
        this.serverId = data.id;
        this.el = document.querySelector(el);
        this.render()
    }

    render() {
        this.template = this.tmplReplace(this.template);
        this.el.innerHTML = this.template;
    }
    // remplacer des parametres dans un template
    tmplReplace(data) {
        data = data.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, '{{$1}}');
        for (let propriete in this) {
            data = data.replace(
                "{{" + propriete + "}}",
                this[propriete]
            );
        }
        return data
    }

}

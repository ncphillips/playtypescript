class TSApp {
    public title: string;
    public divId: string;

    public constructor(title: string, divId: string) {
        this.title = title;
        this.divId = divId;
    }

    private div(): HTMLElement {
        var div = document.getElementById(this.divId);

        if (div === null) {
            throw new Error("Div ID " + this.divId + " did not reference an HTML Element");
        }

        return div;
    }

    public render(): void {
        this.div().innerHTML = "<h2>" + this.title + "</h2>";
    }
}


var app = new TSApp("Hello Typescript!", "strong-typescript");

setTimeout(function () {
    app.render();
}, 1000);
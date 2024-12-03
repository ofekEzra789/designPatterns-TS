interface Button {
    render(): void;

    onClick(): void;
}

class WindowsButton implements Button {
    render(): void {
        console.log('Render windows button');
    }

    onClick(): void {
        console.log('Clicked on the Windows Button');
    }
}

class HtmlButton implements Button {
    render(): void {
        console.log('Render Html button');
    }

    onClick(): void {
        console.log('Clicked on the Html button');
    }

}

class LinuxButtton implements Button {
    render(): void {
        console.log('Render Linux button');
    }

    onClick(): void {
        console.log('Clicked on the Linux button');
    }

}

abstract class Dialog {
    abstract dialogType: string;

    abstract createButton(): Button;

    render(): void {
        const htmlButton: Button = this.createButton();
        htmlButton.onClick();
        htmlButton.render();
    }
}

class WindowsDialog extends Dialog {
    dialogType = 'Windows';

    createButton(): Button {
        return new WindowsButton();
    }
}

class HtmlDialog extends Dialog {
    dialogType = 'HTML';

    createButton(): Button {
        return new HtmlButton();
    }
}

class LinuxDialog extends Dialog {
    dialogType = 'Linux';

    createButton(): Button {
        return new LinuxButtton();
    }

}

class Application {
    dialog: Dialog;

    constructor(d: Dialog) {
        if (d.dialogType === 'Windows') {
            this.dialog = new WindowsDialog();
        } else if (d.dialogType === 'HTML') {
            this.dialog = new HtmlDialog();

        } else if (d.dialogType === 'Linux') {
            this.dialog = new LinuxDialog();
        } else {
            throw new Error(`Error! Unknown operating system`);
        }
    }

    main(): void {
        this.dialog.render();
    }
}

const newApp = new Application(new WindowsDialog());
newApp.main();

const newApp2 = new Application(new HtmlDialog());
newApp2.main();

const newApp3 = new Application(new LinuxDialog());
newApp3.main();





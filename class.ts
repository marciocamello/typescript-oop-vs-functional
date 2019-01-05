// class Emoji {

//     private _prev;

//     constructor(public _icon) { }

//     get icon() {
//         return this._icon;
//     }

//     get prev() {
//         return this._prev;
//     }

//     change(val) {
//         this._prev = this._icon;
//         this._icon = val;
//     }
// }

// const emoji = new Emoji('🌞');

// console.log(emoji.icon, emoji.prev);

// emoji.change('⚡');
// emoji.change('🐵');

// console.log(emoji.icon, emoji.prev);

// Static Methods

class Emoji {

    static addOneTo(val) {
        return 1 + val;
    }
}

Emoji.addOneTo(3);
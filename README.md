# midi-to-keyboard

Easily map a MIDI controller to your computer keyboard 🎹  💻

![piano](https://user-images.githubusercontent.com/12957692/118020330-3f93a000-b35a-11eb-9e98-ccdd0c56e6d3.gif)


## Why?

Just because I wanted to pause and rewind YouTube piano videos easily and more comfortably.

---
## Requirements

- Node.js

## Install

    $ npm install

## Configure

Create a `bindings.json` file at the root of the project and set the bindings between the MIDI messages and the keys.

The bindings for the keyboard can be found [here](http://robotjs.io/docs/syntax#keys)

Binding example:

```json
{
  "144": {
    "60": "c"
  }
}
```

`144` is the MIDI message for pressing a key. `60` is the central C key. So, whenever that key is pressed, the keyboard output will be the letter `c`

## Run the project

    $ node .

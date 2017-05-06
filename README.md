# Framevuerk

> An simple cli tool for persian users. Easy as calling maryam!

## Installation

```bash
npm install -g maryam-cli
```

## Usage
```bash
maryam <module> [<args>]
```

## Modules

### translate
> Translate persian text to english and also english text to persian with automatic input language detection.

```bash
maryam translate <string>
```

#### Examples

```bash
maryam translate Hello
# OK: سلام

maryam translate دوست
# OK: Friend

maryam translate "سلام حالت خوبه؟"
# OK: Hello are you feeling good?
```
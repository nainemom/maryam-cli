# Maryam CLI

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


### fixsub
> Fix persian subtitles encoding.

```bash
maryam fixsub <src> [<dst>]
```

#### Examples

```bash
maryam fixsub ./mr-robot-s01e01.srt ./mr-robot-s01e01.fixed.srt 
# OK: File './mr-robot-s01e01.fixed.srt' saved!

maryam fixsub ./sherlock-s02e02.srt
# OK: File './sherlock-s02e02.srt' saved!
```

### renamesubs
> Sync subtitle file name with movie file name via levenshtein comparison.

```bash
maryam renamesubs <srcPath>
```

#### Examples

```bash
maryam renamesubs ./mr-robot/S01
# OK: Done!


# Before:
#   mr-robot-s01-e01.mkv
#   mr-robot-s01-e02.mkv
#   mr-robot-s01-e03.mp4
#   e01.srt
#   E02.srt
#   MrRobotS01E03.srt
#   ...
#
# After:
#   mr-robot-s01-e01.mkv
#   mr-robot-s01-e01.srt
#   mr-robot-s01-e02.mkv
#   mr-robot-s01-e02.srt
#   mr-robot-s01-e03.mp4
#   mr-robot-s01-e03.srt
#   ...
```
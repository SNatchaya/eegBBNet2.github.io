---
layout: default
title: Preprocessing
nav_order: 2
---

# Prepocessing
{: .fs-9 }

Conduct the algorithm using OpenBMI EEG dataset, and analysis the datas in offline phase. Bandpass using Butterworth filter and downsample the signals.  

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## OpenBMI datasets


The OpenBMI dataset consists of 3 EEG recognition tasks, namely Motor Imagery (MI), Steady-State Visually Evoked Potential (SSVEP), and Event-Related Potential (ERP). 
Each dataset contains 54 healthy subjects, and each subject was recorded the EEG using a BrainAmp EEG amplifier equipped with 62 electrodes.

```
Data sizes : (sessions × subjects × trials × EEGchannels × timesteps)
```

**EEG recognition tasks**

| EEG tasks | Dimensions |
|:---|:---|
| MI    | `(2,54,100,62,1000)`  |
| SSVEP | `(2,54,100,62,1000)`  |
| ERP   | `(2,54,100,62,200)`   |


For **downloading** the raw dataset.
```py
EEGBBNet.dataset.raw(eeg_task)
```

**Arguments**

| Arguments | Description |
|:---|:---|
|eeg_task   | `str` Task name (e.g. `MI`, `SSVEP`, and `ERP`) |


### Example
```py
import EEGBBnet

EEGBBNet.dataset.raw('MI')
EEGBBNet.dataset.raw('SSVEP')
EEGBBNet.dataset.raw('ERP')
```

---

## Pre-processing

### Example

---
layout: default
title: Dataset
parent: API reference
nav_order: 1
---

# Dataset
{: .no_toc }

Conduct the algorithm using OpenBMI EEG dataset, and analysis the datas in offline phase.

```py
EEGBBnet.dataset
```

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn .mr-1}

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## OpenBMI dataset


The OpenBMI dataset consists of 3 EEG recognition tasks, namely Motor Imagery (MI), Steady-State Visually Evoked Potential (SSVEP), and Event-Related Potential (ERP). 
Each dataset contains 54 healthy subjects, and each subject was recorded the EEG using a BrainAmp EEG amplifier equipped with 62 electrodes.

```
Data sizes : (sessions, subjects, trials, EEGchannels, timesteps)
```

**EEG recognition tasks**

| EEG tasks | Dimensions |
|:---|:---|
| MI    | `(2,54,100,62,1000)`  |
| SSVEP | `(2,54,100,62,1000)`  |
| ERP   | `(2,54,100,62,200)`   |


### Raw data

For **downloading** the raw data.
```py
EEGBBNet.dataset.raw(eeg_task)
```

**Arguments**

| Arguments | Description |
|:---|:---|
|eeg_task   | `str` Task name (e.g. `MI`, `SSVEP`, and `ERP`) |


#### Example

```py
import EEGBBnet 

EEGBBNet.dataset.raw('MI')
EEGBBNet.dataset.raw('SSVEP')
EEGBBNet.dataset.raw('ERP')
```

### Preprocessed data

In our preprocessed data, the 4-second MI periods are used to analyze the openBMI dataset. We apply a Butterworth filter to signals between 3-40 Hz and then downsample to 250 Hz.

For **downloading** the preprocessed data.
```py
EEGBBNet.dataset.preprocessed(eeg_task)
```

**Arguments**

| Arguments | Description |
|:---|:---|
|eeg_task   | `str` Task name (e.g. `MI`, `SSVEP`, and `ERP`) |


#### Example

```py
import EEGBBnet 

EEGBBNet.dataset.preprocessed('MI')
EEGBBNet.dataset.preprocessed('SSVEP')
EEGBBNet.dataset.preprocessed('ERP')
```
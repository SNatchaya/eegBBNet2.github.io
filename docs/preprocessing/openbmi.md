---
layout: default
title: OpenBMI dataset
parent: Preprocessing
nav_order: 1
---

# OpenBMI dataset
{: .no_toc }
The OpenBMI dataset consists of 3 EEG recognition tasks, namely Motor Imagery (MI), Event-Related Potential (ERP), and Steady-State Visually Evoked Potential (SSVEP). Each dataset contains 54 healthy subjects, and each subject was recorded the EEG using a BrainAmp EEG amplifier equipped with 62 electrodes

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Datasets

Data size : `(sessions × subjects × trials × EEGchannels × timesteps)`

### Motor imagery (MI)

```py
EEGBBNet.dataset.MI()
```

---
### Event-Related Potentia (ERP)

```py
EEGBBNet.dataset.ERP()
```
---
### Steady-State Visually Evoked Potential (SSVEP)

```py
EEGBBNet.dataset.SSVEP()
```
---
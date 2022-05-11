---
layout: default
title: OpenBMI dataset
parent: Preprocessing
nav_order: 1
---

# OpenBMI dataset
{: .no_toc }
The OpenBMI dataset consists of 3 EEG recognition tasks, namely Motor Imagery (MI), Event-Related Potential (ERP), and Steady-State Visually Evoked Potential (SSVEP). Each dataset contains 54 healthy subjects, and each subject was recorded the EEG using a BrainAmp EEG amplifier equipped with 62 electrodes

[View it on GitHub](xxx){: .btn .btn-purple }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Datasets

Data size : `(sessions × subjects × trials × EEGchannels × timesteps)`

### Motor imagery (MI)

```py

```

---
### Event-Related Potentia (ERP)

```py

```
---
### Steady-State Visually Evoked Potential

```py

```
---
## Preprocessing
### Bandpass filter
Bandpass the EEG signals using the Butterworth filter with frequency range 3-40 Hz.

---
### Downsample
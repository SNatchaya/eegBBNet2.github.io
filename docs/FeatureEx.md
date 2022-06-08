---
layout: default
title: Feature Extractions
nav_order: 3
has_children: true
---

# Feature Extractions
{: .fs-9 }

EEG feature extractions, which have the state-of-the-art feature extractions to implement with SVM and RF models.

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## PSD
The method is implemented based on STFT based Welch power spectral density (PSD) [ref paper](https://www.researchgate.net/publication/339634957_A_Survey_on_Feature_Extraction_Methods_for_EEG_Based_Emotion_Recognition?enrichId=rgreq-7c71182eab7fb387572844faec103876-XXX&enrichSource=Y292ZXJQYWdlOzMzOTYzNDk1NztBUzo4Nzg3NTYyMDE3NzEwMDhAMTU4NjUyMzIxMzM2Nw%3D%3D&el=1_x_3&_esc=publicationCoverPdf).

### Method
The configuration of this mathod is shown below. This feature extraction method is implemented based on [scipy.signal.stft](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.stft.html) and [scipy.signal.welch](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.welch.html).

```py
EEGBBNet.fe.PSD(data,
                fs,
                nperseg=nperseg,
                return_onesided=bool)
```
**Arguments** 

| Arguments | Description | Default |
|:----------|:------------|:-------|
|data   | `ndarray` The time-series data.                           | `shape of data` |
|fs     | `float` The sampling frequency of the *data* time-series. | `1.0` |
|nperseg| `int` Length of each segment.                             | `256` |
|return_onesided| `bool` If True, return a one-sided spectrum for real data. If False return a two-sided spectrum. |`True`|

**Return** : *{freq, psd}* 

| Arguments | Description |
|:---|:---|:---|
|freq   | `ndarray` Array of sample frequencies.        |
|psd    | `ndarray` PSD or power spectrum of data.      |

---

### Example
```py
from EEGBBNet.fe import PSD
import numpy as np

freqs, psd = PSD(eeg,
                 1000,
                 nperseg=700,
                 return_onesided=False)
```

---

## AR
The method is AutoRegressive (AR) Model. 

### Method
The configuration of this mathod is shown below. This feature extraction method is implemented based on [sm.tsa.arima.ARIMA](https://www.statsmodels.org/devel/generated/statsmodels.tsa.arima.model.ARIMA.html)

```py
EEGBBNet.fe.AR(data,
               order=order
               enforce_stationarity=bool)
```

**Arguments** 

| Arguments | Description | Default |
|:----------|:------------|:-------|
|data                   | `ndarray` The time-series data.                       | `(subject, trial, EEGchannel)` |
|order                  | `tuple` The (p,d,q) order of autoregressive model.    | `(0,0,0)`                      |
|enforce_stationarity   | `bool` Whether or not to require the autoregressive parameters to correspond to a stationarity process. | `True` |

**Note**
- p : Autoregressive models
- q : Moving average models
- d : Integer

**Return** : The coefficients of EEG signals.

---

### Example
```py
from EEGBBNet.fe import AR
import numpy as np

ar[subject, trial, EEGchannel] = AR(eeg[subject, trial, EEGchannel],
                                    order=(7,0,0),              # Auto Regressive with 7 order
                                    enforce_stationarity=False)
```

---
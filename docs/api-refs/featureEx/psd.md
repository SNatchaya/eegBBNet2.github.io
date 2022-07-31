---
layout: default
title: EEGBBnet.feature_extraction.PSD
parent: Feature Extraction
grand_parent: API reference
nav_order: 1
---

# PSD
{: .no_toc }

The method is implemented based on **STFT based Welch power spectral density (PSD)** [ref paper](https://www.researchgate.net/publication/339634957_A_Survey_on_Feature_Extraction_Methods_for_EEG_Based_Emotion_Recognition?enrichId=rgreq-7c71182eab7fb387572844faec103876-XXX&enrichSource=Y292ZXJQYWdlOzMzOTYzNDk1NztBUzo4Nzg3NTYyMDE3NzEwMDhAMTU4NjUyMzIxMzM2Nw%3D%3D&el=1_x_3&_esc=publicationCoverPdf).

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Method
The configuration of this mathod is shown below. This feature extraction method is implemented based on [scipy.signal.stft](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.stft.html) and [scipy.signal.welch](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.welch.html).

```py
EEGBBNet.feature_extraction.PSD(data,
                                fs,
                                nperseg=nperseg,
                                return_onesided=bool)
```
**Arguments** 

| Arguments | Description | Default |
|:----------|:------------|:-------|
|data   | `ndarray` The time-series data.                           | `shape of data` |
|fs     | `float` The sampling frequency of the *data* time-series. | `1000` |
|nperseg| `int` Length of each segment.                             | `750` |
|return_onesided| `boolean` If True, return a one-sided spectrum for real data. If False return a two-sided spectrum. | `False` |

**Return** : *{freq, psd}* 

| Arguments | Description |
|:---|:---|
|freq   | `ndarray` Array of sample frequencies.        |
|psd    | `ndarray` PSD or power spectrum of data.      |

---

## Example
```py
from EEGBBNet.feature_extraction import PSD
import numpy as np

freqs, psd = PSD(eeg,
                 1000,
                 nperseg=700,
                 return_onesided=False)
```
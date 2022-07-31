---
layout: default
title: EEGBBnet.feature_extraction.AR
parent: Feature Extraction
grand_parent: API reference
nav_order: 2
---

# AR
{: .no_toc }

The method is **AutoRegressive (AR)** Model. 

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
The configuration of this mathod is shown below. This feature extraction method is implemented based on [sm.tsa.arima.ARIMA](https://www.statsmodels.org/devel/generated/statsmodels.tsa.arima.model.ARIMA.html)

```py
EEGBBNet.feature_extraction.AR(data,
                               order=order,
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

## Example
```py
from EEGBBNet.feature_extraction import AR
import numpy as np

ar[subject, trial, EEGchannel] = AR(eeg[subject, trial, EEGchannel],
                                    order=(7,0,0),              # Auto Regressive with 7 order
                                    enforce_stationarity=False)
```
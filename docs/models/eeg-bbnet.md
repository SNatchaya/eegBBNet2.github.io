---
layout: default
title: EEG-BBNet
parent: Models
nav_order: 6
---

# EEG-BBNet
{: .no_toc }

**EEG-BBNet** is comprised of CNN, GCN, and fully connected layers, sequentially.

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Model class
Configures the model for training. Based on [tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model).

```py
our library
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### Build method
Build the model that ....

```py
EEGBBNet.build()
```
---

### Fit method

Fit the EEGBBNet model according to the given training set `(X_train, y_train)` and validation set `(X_val, y_val)`.

```py
EEGBBNet.fit(X_train,
             y_train,
             X_val,
             y_val)
```

**Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.                  | `(subject*trial, EEGchannel, timestep, 1)`  |
|y_train   | `ndarray` Class label of training set.           | `(subject*trial, )`                         |
|X_val     | `ndarray` Validation EEG signals.                | `(subject*trial, EEGchannel, timestep, 1)`  |
|y_val     | `ndarray` Class label of validation set.         | `(subject*trial, )`                         |

---

### Predict method
```py
EEGBBNet.predict(X_test,
                 y_test)
```
 
 **Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `(subjetc*trial, feature)`    |
|y_test     | `ndarray` Class labels of testing set.    | `(subjetc*trial, )`              |

---

## Example

```py
from EEGBBNet.model import EEGBBNet
import numpy as np

model = EEGBBNet(input_shape=(1, 400, 20), 
                 num_class=2, 
                 monitor='val_loss', 
                 shuffle=True)
model.fit(X_train, 
          y_train, 
          X_val, 
          y_val)

Y, evaluation = model.predict(X_test, 
                              y_test)
```
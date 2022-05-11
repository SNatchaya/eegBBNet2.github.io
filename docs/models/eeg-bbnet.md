---
layout: default
title: EEG-BBNet
parent: Models
nav_order: 5
---

# EEG-BBNet
{: .no_toc }

**EEG-BBNet** is comprised of CNN, GCN, and fully connected layers, sequentially.

[View it on GitHub](xxx){: .btn .btn-purple }

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

```py
EEGBBNet.fit(X_train,
             y_train,
             X_val,
             y_val)
```

**Arguments**

| Arguments | Description |
|:---|:----|
|X_train   | `ndarray` Training EEG signals. shape (*#trial*, *#depth*, *#time_point*, *#channel*) | 
|y_train   | `ndarray` Label of training set. shape (*#trial*) |
|X_val   | `ndarray` Validation EEG signals. shape (*#trial*, *#depth*, *#time_point*, *#channel*) |
|y_val   | `ndarray` Label of validation set. shape (*#trial*) | 

---

### Predict method
```py
EEGBBNet.predict(X_test,
                 y_test)
```
 
 **Arguments**

| Arguments | Description |
|:---|:----|
|X_test   | `ndarray` Testing EEG signals. shape (*#trial*, *#depth*, *#time_point*, *#channel*) | 
|y_test   | `ndarray` Label of test set. shape (*#trial*) |

---

## Example

```py
from EEGBBNet.model import EEGBBNet
import numpy as np

model = EEGBBNet(input_shape=(1, 400, 20), num_class=2, monitor='val_loss', shuffle=True)
model.fit(X_train, y_train, X_val, y_val)

Y, evaluation = model.predict(X_test, y_test)
```
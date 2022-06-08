---
layout: default
title: CNN + LSTM
parent: Models
nav_order: 4
---

# CNN and Long Short-Term Mamory (LSTM)
{: .no_toc }

[<img src="https://github.com/SNatchaya/eegBBNet2.github.io/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## CNN+LSTM class
The configuration of this mathod is shown below. The implementation is based on [tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model).

```py
EEGBBNet.model.CNNLSTM()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
| ip_shape  | `tuple` of integers. The input. **Note** : The input shape depends on the data shape. | `(#EEGchannels, #timesteps, 1)` |

---

## Build model
(?) Build the model that group layers into an object with training and inference features.

``py
CNNLSTM.build()
``

**Return**: Model `(tf.keras.Model)` : Model object

---

## Fit model
Fit the CNN+LSTM model according to the given training set *(X_train, y_train)* and validation set *(X_val, y_val)*. This method is implemented based on [tf.keras.Model.fit()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#fit).

```py
CNNLSTM.fit(x = X_train,
            y = y_train,
            validation_data = (X_val, y_val),
            batch_size = batch_size,
            epochs = epochs)
```

**Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|x   | `ndarray` Training EEG signals.                  | `(#subjects x #trials, #EEGchannels, #timesteps, 1)`  |
|y   | `ndarray` Class label of training set.           | `(#subjects x #trials,)`                              |
|validation_data    | `ndarray` Validation EEG signals     | X_val: `(#subjects x #trials, #EEGchannels, #timesteps, 1)`, y_val: `(#subjects x #trials,)` |
|batch_size         | `int` or `None` Number of samples per gradient update.    | - |
|epochs             | `int` Number of epochs to train the model.                | - |
|**kwargs           | Keyword argument to pass into the function for replacing the variables of the model such as `loss`, `optimizer`, `metrics`| - | 

---

## Predict method

Return the output predictions and evaluation on samples in testing set *(X_test, y_test)*. This method is implemented based on [tf.keras.Model.predict()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#predict) and [tf.keras.Model.evaluate()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#evaluate)

```py
CNNLSTM.evaluation( x = X_test, 
                    y = y_test,
                    batch_size = batch_size)
```
 
 **Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `(#subjects x #trials, #EEGchannels, #timesteps, 1)`  |
|y_test     | `ndarray` Class labels of testing set.    | `(#subjetcs x #trials,)`                              |
|batch_size         | `int` or `None` Number of samples per batch of computation.     | - |

**Return** : the loss value & metrics values for the model in test mode.

---

## Example

```py
from EEGBBNet.model import CNNLSTM
import numpy as np

model = CNNLSTM(ip_shape=(5400, 62, 1000))
model.fit(  X_train,
            y_train,
            validation_data=(X_val, y_val),
            batch_size=32,
            epochs=100)
y_pred, history = model.evaluation( X_test,
                                    y_test,
                                    batch_size=32)
```
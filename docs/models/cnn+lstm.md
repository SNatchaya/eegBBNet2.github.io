---
layout: default
title: CNN + LSTM
parent: Models
nav_order: 4
---

# CNN and LSTM
Convolutional Neural Network (CNN) and Long Short-Term Memory (LSTM).
{: .no_toc }

[<img src="https://min2net.github.io/assets/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

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

| Arguments | Description | Default |
|:----------|:------------|:-------|
| input_shape   | `tuple` of integers.                              | `(62,1000,1)` |
| num_class     | `int` Number of class.                            | `None` |
| loss          | `str` Name of objective function. [objective function instance](https://www.tensorflow.org/api_docs/python/tf/keras/losses) | `sparse_categorical_crossentropy` |
| optimizer     | `str` Name of optimizer. [optimizer instance](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers) | `Adam` |
| use_bias      | `boolean` Whether the layer uses a bias vector    | `Ture`| 
|**kwargs       | Keyword arguments to pass into the function for replacing the variables of the model such as `model_name`, `metrics` or `seed`| - | 

---

### Build model
(?) Build the model that group layers into an object with training and inference features.

```py
CNNLSTM.build()
```

**Return**: Model `(tf.keras.Model)` : Model object

---

### Fit model
Fit the CNN+LSTM model according to the given training set `(X_train, y_train)` and validation set `(X_val, y_val)`. This method is implemented based on [tf.keras.Model.fit()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#fit).

```py
CNNLSTM.fit(X_train,
            y_train,
            X_val,
            y_val,
            batch_size = batch_size,
            epochs = epochs)
```

**Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.              | `(subject*trial, EEGchannel, timestep, 1)`  |
|y_train   | `ndarray` Class label of training set.       | `(subject*trial, )`                          |
|X_val     | `ndarray` Validation EEG signals.            | `(subject*trial, EEGchannel, timestep, 1)`  |
|y_val     | `ndarray` Class label of validation data.    | `(subject*trial, )`                         |
|batch_size         | `int` or `None` Number of samples per gradient update.    | - |
|epochs             | `int` Number of epochs to train the model.                | - |

---

### Evaluate method

Return the output predictions and evaluation on samples in testing set `(X_test, y_test)`. This method is implemented based on [tf.keras.Model.predict()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#predict) and [tf.keras.Model.evaluate()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#evaluate)

```py
CNNLSTM.evaluate(X_test, 
                 y_test)
```
 
 **Arguments**

| Arguments | Description | Dimensions |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `(subject*trial, EEGchannel, timestep, 1)`  |
|y_test     | `ndarray` Class labels of testing set.    | `(subject*trial, )`                          |

**Returns** : The predicted label and evaluation for the model in test mode.

| Returns | Description |
|:---|:---|
| y_pred        | `ndarray` the predicted label.        |
| evaluation    | The dictionary of `{loss, accuracy}`  |

---

## Example

```py
from EEGBBNet.model import CNNLSTM
import numpy as np

model = CNN(input_shape=X_train[-1].shape, num_class=54)
model.fit(X_train,
          y_train,
          X_val,
          y_val,
          batch_size=32,
          epochs=100)
y_pred, evaluation = model.evaluate(X_test,
                                    y_test)
```
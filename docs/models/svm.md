---
layout: default
title: SVM
parent: Models
nav_order: 1
---

# Support Vector Machine (SVM)
{: .no_toc }

[<img src="https://github.com/SNatchaya/eegBBNet2.github.io/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## SVM class
The implementation is based on [sklearn.svm.SVC](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html) The configuration of this mathod is shown below.

```py
EEGBBNet.model.SVM()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
| random_state  | `int` RandomState instance.                   | *None*    |

---

### Fit method
Fit the SVM model according to the given training set. 

```py
SVM.fit(X_train,
        y_train)
```

**Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.        | `(#subjects x #trials, #features)` |
|y_train   | `ndarray` Class label of training set. | `(#subjects x #trials,)`              |

---

### Predict method
Return the output predictions and classification accuracy on samples in testing set.

```py
SVM.predict(X_test, 
            y_test)
```
 
 **Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|X_test     | `ndarray` Testing EEG signals.            | `(#subjetcs x #trials, #features)`    |
|y_test     | `ndarray` Class labels of testing set.    | `(#subjetcs x #trials,)`              |

**Return** : *{y_pred, acc}* 

| Arguments | Description | Shape |
|:---|:---|:---|
|y_pred | `ndarray` Predicted label of testing set.     | `(#Predicted labels,)`|
|acc    | `int` Classification accuracy of model.       | `1-value`             |

---

## Example

```py
from EEGBBNet.model import SVM
import numpy as np

model = SVM()
model.fit(X_train, y_train)
y_pred,acc = model.predict(X_test, y_test)
```
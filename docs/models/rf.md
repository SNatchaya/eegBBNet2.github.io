---
layout: default
title: RF
parent: Models
nav_order: 2
---

# Random Forest (RF)
{: .no_toc }

[<img src="https://github.com/SNatchaya/eegBBNet2.github.io/images/github.png" width="15" height="15"> Source code on GitHub](xxx){: .btn}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## RF class
The implementation is based on [sklearn.ensemble.RandomForestClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html) The configuration of this mathod is shown below.

```py
EEGBBNet.model.RF()
```
**Arguments** 

| Arguments | Description | Default|
|:----------|:------------|:-------|
|n_estimator    | `int` The number of trees in the forest.      | `100`     |
|max_depth      | `int` The maximum depth of the tree.          | *None*    |
|criterion      | `{'gini', 'entropy', 'log_loss'}` The function to measure the quality of a split | *gini* |
| random_state  | `int` RandomState instance.                   | *None*    |

---

### Fit method
Fit the RF model according to the given training set *(X_train, y_train)*. 

```py
SVM.fit(X_train,
        y_train)
```

**Arguments**

| Arguments | Description | Shape |
|:---|:----|:---|
|X_train   | `ndarray` Training EEG signals.        | `(#subjects x #trials, #features)`    |
|y_train   | `ndarray` Class label of training set. | `(#subjects x #trials,)`              |

---

### Predict method
Return the output predictions and classification accuracy on samples in testing set *(X_test, y_test)*.

```py
RF.predict( X_test, 
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
from EEGBBNet.model import RF
import numpy as np

model = RF()
model.fit(X_train, y_train)
y_pred,acc = model.predict(X_test, y_test)
```
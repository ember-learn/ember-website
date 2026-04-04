import { setApplication } from '@ember/test-helpers';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import Application from '../app/app.js';
import config, { enterTestMode } from '../app/config/environment.js';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

export function start() {
  enterTestMode();

  setup(QUnit.assert);

  setApplication(Application.create(config.APP));

  setupEmberOnerrorValidation();

  qunitStart();
}

import { setApplication } from '@ember/test-helpers';
import { setupEmberOnerrorValidation, start } from 'ember-qunit';
import { loadTests } from 'ember-qunit/test-loader';
import Application from 'ember-website/app';
import config from 'ember-website/config/environment';
import QUnit from 'qunit';
import { setup } from 'qunit-dom';

setup(QUnit.assert);
setApplication(Application.create(config.APP));
setupEmberOnerrorValidation();
loadTests();
start();

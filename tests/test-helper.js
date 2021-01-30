import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Application from 'ember-website/app';
import config from 'ember-website/config/environment';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();

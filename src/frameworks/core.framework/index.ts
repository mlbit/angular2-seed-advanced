// angular
import {provide, enableProdMode} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

// libs
import {Angulartics2} from 'angulartics2';
import {Angulartics2Segment} from 'angulartics2/src/providers/angulartics2-segment';

// app
import {AnalyticsService} from './services/analytics.service';
import {LogService} from './services/log.service';

export const ENV_PROVIDERS: Array<any> = [];
if ('<%= ENV %>' === 'prod') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

export const ANALYTICS_PROVIDERS: any[] = [
  Angulartics2,
  Angulartics2Segment,
  AnalyticsService
];

export const CORE_PROVIDERS: any[] = [
  HTTP_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' }),
  ROUTER_PROVIDERS,
  LogService,
  ANALYTICS_PROVIDERS
];

// services
export * from './services/analytics.service';

// decorators
export * from './decorators/base.component';
export * from './decorators/form.component';
export * from './decorators/route.component';

// interfaces
export * from './interfaces/ianalytics';
export * from './interfaces/iconsole';
export * from './interfaces/iwindow';
export * from './interfaces/ilang';

// services
export * from './services/core-config.service';
export * from './services/console.service';
export * from './services/log.service';
export * from './services/view-broker.service';
export * from './services/window.service';

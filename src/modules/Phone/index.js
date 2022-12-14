import { SDK } from '@ringcentral/sdk';
import { RingCentralClient } from '@ringcentral-integration/commons/lib/RingCentralClient';

import { ModuleFactory } from '@ringcentral-integration/commons/lib/di';
import RcModule from '@ringcentral-integration/commons/lib/RcModule';
import { LocalForageStorage } from '@ringcentral-integration/commons/lib/LocalForageStorage';

import { Alert } from '@ringcentral-integration/commons/modules/Alert';
import { AlertUI } from '@ringcentral-integration/widgets/modules/AlertUI';
import { AccountInfo } from '@ringcentral-integration/commons/modules/AccountInfoV2';
import { AppFeatures } from '@ringcentral-integration/commons/modules/AppFeatures';
import { Auth } from '@ringcentral-integration/commons/modules/AuthV2';
import { Brand } from '@ringcentral-integration/commons/modules/Brand';
import { ConnectivityMonitor } from '@ringcentral-integration/commons/modules/ConnectivityMonitorV2';
import { DateTimeFormat } from '@ringcentral-integration/commons/modules/DateTimeFormatV2';
import { DataFetcherV2 } from '@ringcentral-integration/commons/modules/DataFetcherV2';
import { DialingPlan } from '@ringcentral-integration/commons/modules/DialingPlanV2';
import { Environment } from '@ringcentral-integration/commons/modules/EnvironmentV2';
import { ExtensionFeatures } from '@ringcentral-integration/commons/modules/ExtensionFeatures';
import { ExtensionInfo } from '@ringcentral-integration/commons/modules/ExtensionInfoV2';
import { GlobalStorage } from '@ringcentral-integration/commons/modules/GlobalStorageV2';
import { Locale } from '@ringcentral-integration/commons/modules/Locale';
import { RateLimiter } from '@ringcentral-integration/commons/modules/RateLimiterV2';
import { RegionSettings } from '@ringcentral-integration/commons/modules/RegionSettings';
import { Storage } from '@ringcentral-integration/commons/modules/StorageV2';
import { SleepDetector } from '@ringcentral-integration/commons/modules/SleepDetectorV2';
import { Subscription } from '@ringcentral-integration/commons/modules/SubscriptionV2';
import { ConnectivityBadgeUI } from '@ringcentral-integration/widgets/modules/ConnectivityBadgeUI';
import { ConnectivityManager } from '@ringcentral-integration/widgets/modules/ConnectivityManager';
import { LoginUI } from '@ringcentral-integration/widgets/modules/LoginUI';
import { OAuth } from '@ringcentral-integration/widgets/modules/OAuth';
import { RegionSettingsUI } from '@ringcentral-integration/widgets/modules/RegionSettingsUI';
import { RouterInteraction } from '@ringcentral-integration/widgets/modules/RouterInteraction';
import { SettingsUI } from '@ringcentral-integration/widgets/modules/SettingsUI';

import { ExtensionPhoneNumber } from '@ringcentral-integration/commons/modules/ExtensionPhoneNumberV2';
import { ExtensionDevice } from '@ringcentral-integration/commons/modules/ExtensionDeviceV2';
import { ForwardingNumber } from '@ringcentral-integration/commons/modules/ForwardingNumberV2';
import { NumberValidate } from '@ringcentral-integration/commons/modules/NumberValidate';
import { CompanyContacts } from '@ringcentral-integration/commons/modules/CompanyContactsV2';
import { ContactSearch } from '@ringcentral-integration/commons/modules/ContactSearchV2';
import Call from '@ringcentral-integration/commons/modules/Call';
import { CallingSettings } from '@ringcentral-integration/commons/modules/CallingSettingsV2';
import { Softphone } from '@ringcentral-integration/commons/modules/Softphone';
import { Ringout } from '@ringcentral-integration/commons/modules/RingoutV2';
import { MessageStore } from '@ringcentral-integration/commons/modules/MessageStoreV2';
import { Conversations } from '@ringcentral-integration/commons/modules/ConversationsV2';
import { ConversationsUI } from '@ringcentral-integration/widgets/modules/ConversationsUI';
import { ConversationUI } from '@ringcentral-integration/widgets/modules/ConversationUI';
import { MessageSender } from '@ringcentral-integration/commons/modules/MessageSenderV2';
import { ComposeText } from '@ringcentral-integration/commons/modules/ComposeTextV2';
import { ComposeTextUI } from '@ringcentral-integration/widgets/modules/ComposeTextUI';

// user Dependency Injection with decorator to create a phone class
// https://github.com/ringcentral/ringcentral-js-integration-commons/blob/master/docs/dependency-injection.md
@ModuleFactory({
  providers: [
    { provide: 'Alert', useClass: Alert },
    { provide: 'AlertUI', useClass: AlertUI },
    { provide: 'RegionSettingsUI', useClass: RegionSettingsUI },
    { provide: 'Brand', useClass: Brand },
    { provide: 'Locale', useClass: Locale },
    { provide: 'DataFetcherV2', useClass: DataFetcherV2 },
    { provide: 'SleepDetector', useClass: SleepDetector },
    { provide: 'GlobalStorage', useClass: GlobalStorage },
    { provide: 'ConnectivityMonitor', useClass: ConnectivityMonitor },
    { provide: 'ConnectivityManager', useClass: ConnectivityManager },
    { provide: 'ConnectivityBadgeUI', useClass: ConnectivityBadgeUI },
    { provide: 'SettingsUI', useClass: SettingsUI },
    { provide: 'LoginUI', useClass: LoginUI },
    { provide: 'Auth', useClass: Auth },
    { provide: 'OAuth', useClass: OAuth },
    { provide: 'AuthOptions', useValue: { usePKCE: true } },
    { provide: 'Storage', useClass: Storage },
    {
      provide: 'StorageOptions',
      useValue: {
        StorageProvider: LocalForageStorage, // IndexedDB
        disableInactiveTabsWrite: true,
      },
      spread: false,
    },
    { provide: 'RateLimiter', useClass: RateLimiter },
    { provide: 'Subscription', useClass: Subscription },
    { provide: 'DateTimeFormat', useClass: DateTimeFormat },
    { provide: 'RouterInteraction', useClass: RouterInteraction },
    { provide: 'AccountInfo', useClass: AccountInfo },
    { provide: 'Environment', useClass: Environment },
    { provide: 'RegionSettings', useClass: RegionSettings },
    { provide: 'ExtensionFeatures', useClass: ExtensionFeatures },
    { provide: 'AppFeatures', useClass: AppFeatures },
    { provide: 'ExtensionInfo', useClass: ExtensionInfo },
    { provide: 'DialingPlan', useClass: DialingPlan },
    {
      provide: 'Client',
      useFactory: ({ sdkConfig }) => new RingCentralClient(new SDK(sdkConfig)),
      deps: [{ dep: 'SdkConfig', useParam: true }],
    },
    { provide: 'ExtensionPhoneNumber', useClass: ExtensionPhoneNumber },
    { provide: 'ExtensionDevice', useClass: ExtensionDevice },
    { provide: 'ForwardingNumber', useClass: ForwardingNumber },
    { provide: 'NumberValidate', useClass: NumberValidate },
    { provide: 'CompanyContacts', useClass: CompanyContacts },
    { provide: 'ContactSearch', useClass: ContactSearch },
    { provide: 'Call', useClass: Call },
    { provide: 'Softphone', useClass: Softphone },
    { provide: 'Ringout', useClass: Ringout },
    { provide: 'CallingSettings', useClass: CallingSettings },
    { provide: 'MessageStore', useClass: MessageStore },
    { provide: 'Conversations', useClass: Conversations },
    { provide: 'ConversationUI', useClass: ConversationUI },
    { provide: 'ConversationsUI', useClass: ConversationsUI },
    { provide: 'MessageSender', useClass: MessageSender },
    { provide: 'ComposeText', useClass: ComposeText },
    { provide: 'ComposeTextUI', useClass: ComposeTextUI },
  ],
})
export default class BasePhone extends RcModule {
  constructor(options) {
    super(options);
    const { appConfig } = options;
    this._appConfig = appConfig;
  }

  initialize() {
    this.store.subscribe(() => {
      if (this.auth.ready) {
        if (this.routerInteraction.currentPath !== '/' && !this.auth.loggedIn) {
          this.routerInteraction.push('/');
        } else if (
          this.routerInteraction.currentPath === '/' &&
          this.auth.loggedIn
        ) {
          this.routerInteraction.push('/settings');
        }
      }
    });
  }

  get name() {
    return this._appConfig.name;
  }

  get version() {
    return this._appConfig.version;
  }

  get _actionTypes() {
    return null;
  }
}

export function createPhone({
  prefix,
  apiConfig,
  brandConfig,
  appVersion,
  redirectUri,
}) {
  @ModuleFactory({
    providers: [
      {
        provide: 'Prefix',
        useValue: prefix,
      },
      {
        provide: 'SdkConfig',
        useValue: {
          ...apiConfig,
          cachePrefix: `sdk-${prefix}`,
          clearCacheOnRefreshError: false,
        },
      },
      {
        provide: 'AppConfig',
        useValue: { name: brandConfig.appName, version: appVersion },
      },
      { provide: 'BrandConfig', useValue: brandConfig },
      { provide: 'OAuthOptions', useValue: { redirectUri } },
    ],
  })
  class Phone extends BasePhone {}
  return Phone.create();
}

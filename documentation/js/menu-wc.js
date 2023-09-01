'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">rss_feed_poc documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' :
                                            'id="xs-controllers-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' :
                                        'id="xs-injectables-links-module-AppModule-36fdf898f25873e951adb96c831740fae335b3b54c3752e39a27ded955c6c2ab63fdfe86dd95296f3083dbf5f5c828461b05eb6335440660817a89f9c06de3e0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RssParserModule.html" data-type="entity-link" >RssParserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' : 'data-bs-target="#xs-controllers-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' :
                                            'id="xs-controllers-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' }>
                                            <li class="link">
                                                <a href="controllers/RssParserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RssParserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' : 'data-bs-target="#xs-injectables-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' :
                                        'id="xs-injectables-links-module-RssParserModule-ca328ec2f8b1be05f72739bc0246e3c871833cf7766f61ef49037a2390c1f92b03d3eaf608b450b91ce4bc66e9dcd31d1512ca80b213312fffbc679422819d6b"' }>
                                        <li class="link">
                                            <a href="injectables/RssParserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RssParserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RssParserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RssParserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/RssParser.html" data-type="entity-link" >RssParser</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateRssParserDto.html" data-type="entity-link" >CreateRssParserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DatabaseConfig.html" data-type="entity-link" >DatabaseConfig</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
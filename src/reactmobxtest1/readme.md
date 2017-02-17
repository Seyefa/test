Structure
---------

```
/src
  /@types

  /components
    /<ComponentName>
      /components
      /services
      index.(js|ts)x?
      styles.s?css

  /data
    /<DomainName>
      api
      models
      store

  /services
    /<ModuleOrUtilName>
      /subdir1
      /subdir2
      file.(js|ts)

  /views
    /<ViewName>
      /components
      /services
      /views
      index.(js|ts)x?
      styles.s?css


  config.json
  index.html
  index.js
  web.config
```
```
Framework
  base components
    shell
    settings
    user (login, settings, etc)
  base ts/js
    config
    ajax
  base styles
    bootstrap
    font-awesome
    
  

```

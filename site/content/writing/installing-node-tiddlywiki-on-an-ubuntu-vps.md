---
title: "Installing a Node-based TiddlyWiki on an Ubuntu VPS"
date: 2017-12-12T13:54:21-05:00
draft: false
---
Tiddlywiki is a non-linear notebook for storing information. We use it at the place where I work as a wiki for all of our institutional knowledge about complex processes and procedures (our documentation is quite extensive and is part of the reason why the Washington Post has named us one of DC's best-run nonprofits).

When I first started, the wiki was saved as a single html file on a shared fileserver in our copy room. It was only accessible on our local network and used an outdated version of Tiddlywiki—finding and editing the file was a major headache (you could only save edits in Internet Explorer, for example 😱) so staff had almost completely stopped using it. 

I upgraded us to TW5 and moved the wiki to a VPS, documenting my steps along the way. The result is that we now have a password-protected wiki on a subdomain on our website, that any of our staff can access from anywhere. Usage has gone way up—and the process of on-boarding new staff members is much easier than it was before.

Here's how to install your own TW5 instance on a VPS of your choosing:

## Prerequisites

A VPS running the following:

* Ubuntu 16.04
* Apache 2.4.18
* Recent versions of Node and npm
* A domain pointed to your server

## Make sure updated versions of node and npm are installed

On our server, node and npm are both installed in /usr/bin/ and NOT /usr/local/bin. This might be different for you, but you can check where they're located by running `which npm` and `which node`. This will be important later when you specify the root path of the Tiddlywiki server command.

Update npm:

```bash
sudo npm i -g npm
```

## Install Tiddlywiki

```bash
sudo npm i -g tiddlywiki
```

Create a new node tiddlywiki folder with server configuration files. I did this in the home directory: /home/ubuntu/wolapedia/.

```bash
tiddlywiki /PATH/TO/YOUR/WIKI --init server
```

## Configure Apache:

Add directory options in /etc/apache2/apache2.conf:

```apache
<Directory /PATH/TO/YOUR/WIKI>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
```

Enable mod_proxy so that Apache can route traffic on your domain or subdomain to port 8080: https://www.digitalocean.com/community/tutorials/how-to-use-apache-as-a-reverse-proxy-with-mod_proxy-on-ubuntu-16-04


```bash
sudo a2enmod proxy && sudo a2enmod proxy_http && sudo service apache2 reload
```


Add a configuration file in /etc/apache2/sites-available/YOURSITE.conf with the following contents:

```apache
<VirtualHost *:80>
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request's Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.

        ServerName YOURDOMAIN
        ServerAlias www.YOURDOMAIN
        ServerAdmin YOUREMAIL

        AllowEncodedSlashes on

        <Proxy *>
        Order Deny,Allow
        Allow from all
        </Proxy>

        ProxyPreserveHost Off
        ProxyPass / http://127.0.0.1:8080/

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with "a2disconf".
        #Include conf-available/serve-cgi-bin.conf


</VirtualHost>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

Now enable it and restart Apache:

```bash
sudo a2ensite YOURSITE && sudo service apache2 reload
```

## Getting Tiddlywiki up and running

### Let's Encrypt

Make sure Let’s Encrypt is configured to work with your domain/subdomain so that all of the HTTP basic authentication goes through an SSL connection:

```bash
sudo letsencrypt -d DOMAIN1 -d DOMAIN2
```

### Node

Here’s the basic command to run the node server. If you exit the SSH connection, reboot the server, or kill the command, the app will stop running.

```bash
tiddlywiki YOURWIKI --server 8080 $:/core/save/all text/plain text/html USERNAME PASSWORD
```

### Forever (or a process manager of your choosing)

Instead, we can set up the command with [forever](https://github.com/foreverjs/forever) so that the app will stay resilient to server changes.

```bash
npm install -g forever

forever start --spinSleepTime 10000 /usr/bin/tiddlywiki /PATH/TO/YOUR/WIKI --server 8080 $:/core/save/all text/plain text/html USERNAME PASSWORD
```

If the server is rebooted, forever won't automatically restart itself. You can set a cronjob set to rerun the forever command if the server is rebooted:

```bash
crontab -e
```

The command to restart forever on server reboot (in cron) is:

```bash
@reboot /usr/bin/forever start --spinSleepTime 10000 /PATH/TO/YOUR/WIKI /PATH/TO/YOUR/WIKI --server 8080 $:/core/save/all text/plain text/html USERNAME PASSWORD
```

The Username and Password fields at the end of the forever command are what you use to set the HTTP Basic Auth. Skip this if you want to allow public access to your wiki.

## Cleaning up

You're done! Now you can import an older tiddlywiki file (like the one that we had on our local file server). Take the HTML file from your old wiki and import it into the Node-based wiki with these instructions: http://tiddlywiki.com/static/Importing%2520Tiddlers.html

If the wiki needs upgrading from Tiddlywiki Classic to Tiddlywiki5, use the upgrade tool here: http://tiddlywiki.com/upgrade.html

Once tiddlywiki is installed and working, you might want to do the following:

* Install the TiddlyWiki Classic parser in the plugins pane of the control panel, otherwise tiddlers will all look weird
* In the control panel, theme tweaks section, change the sidebar layout to fluid story, fixed sidebar
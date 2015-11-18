Installing Node
===============

Using `nvm` (Node Version Manager) will allow you to have multiple versions of Node on your machine. More importantly, it will prevent you from having to use `sudo` when installing using `npm install`.

1. Run the following commmand anywhere to install `nvm`:

    ```bash
    git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
    ```

2. Enable `nvm` on your system by edit the `.bashrc` or `.profile` file:

    ```bash
    vi ~/.bashrc
    ```

3. Paste the following into your open file. This will initialize the `nvm` environment every time your terminal loads:

    ```bash
    source ~/.nvm/nvm.sh
    ```

4. Either restart your terminal to make your `.bashrc` reload, or just use the `source` command:

    ```bash
    source ~/.bashrc
    ```

5. Use `nvm` to install `node`:

    ```bash
    nvm install 0.10
    ```

6. Tell `nvm` which version of `node` to default to:

    ```bash
    nvm use 0.10
    nvm alias default 0.10
    ```

    **Note**: You can use `nvm ls-remote` to see the most current releases of node.

7. To see a list of all the `node` versions you have installed:

    ```bash
    nvm ls
    ```

--------------------------

For advanced users: To make your current node and npm available for all the users on your machine (think VPS), run the following command:

```bash
n=$(which node);n=${n%/bin/node}; chmod -R 755 $n/bin/*; sudo cp -r $n/{bin,lib,share} /usr/local
```

This will take your current locally visible binaries and move them to /usr/local for everyone to see.

Click [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps) for more info.

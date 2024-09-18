# How to Deploy a Vite-based React App to GitHub Pages

This guide will show you how to deploy your Vite-based React application to GitHub Pages, including troubleshooting common issues like branch conflicts and permission errors.

## Prerequisites

- **Node.js and npm** installed on your machine
- A **GitHub account**
- A **Vite-based React application** ready to deploy

## Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and create a **new repository**.
2. **Do not** initialize the repository with a README, `.gitignore`, or License file.
3. Open your terminal and navigate to your Vite React app's root directory.
4. Initialize a new git repository if you haven't already:

   ```bash
   git init
   ```

5. Add the remote repository:

   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   ```

6. Add all files and commit:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

7. Push the code to GitHub:

   ```bash
   git push -u origin main
   ```

### 2. Install `gh-pages`

The `gh-pages` package helps deploy your app to GitHub Pages.

Run this command in your project directory:

```bash
npm install gh-pages --save-dev
```

### 3. Update `package.json`

Edit your `package.json` file to include a `homepage` field and add deployment scripts.

**Add a `homepage` field:**

```json
"homepage": "https://<your-username>.github.io/<your-repo-name>/"
```

Replace `<your-username>` and `<your-repo-name>` with your GitHub username and the repository name, respectively.

**Add the `predeploy` and `deploy` scripts:**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 4. Configure `vite.config.js`

Add a `base` property to your `vite.config.js` file to specify the base URL your application is being deployed at.

```javascript
// vite.config.js
export default {
  // ...other configurations
  base: "/<your-repo-name>/",
};
```

Replace `<your-repo-name>` with the name of your repository.

### 5. Create the Build

Run the following command to create the production build:

```bash
npm run build
```

This will generate a `dist` folder containing the production-ready code for your app.

### 6. Deploy the App

To deploy the app to GitHub Pages, run:

```bash
npm run deploy
```

This will push the contents of the `dist` folder to a new `gh-pages` branch on your repository.

### 7. Configure GitHub Pages in Repository Settings

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select `gh-pages`.
4. Under **Folder**, ensure that `/ (root)` is selected.
5. Click **Save**.

   *Note: Make sure that the branch is set to `gh-pages` and the folder is set to `/ (root)`. This tells GitHub Pages to serve the content from the `gh-pages` branch's root directory.*

6. Your website should be live at:

   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

## Troubleshooting Common Issues

### 1. Permission Denied (403 Error)

**Error Message:**

```bash
remote: Permission to <username>/<repo-name>.git denied to <another-user>.
```

**Cause:**

This happens because you are not authenticated or don’t have the proper access.

**Solution:**

- Ensure you're logged into the correct GitHub account.
- Update your GitHub credentials by running:

  ```bash
  git config --global credential.helper store
  git pull origin main
  ```

- Then, deploy again:

  ```bash
  npm run deploy
  ```

### 2. `gh-pages` Branch Already Exists Error

**Error Message:**

```bash
fatal: A branch named 'gh-pages' already exists.
```

**Solution 1: Force the Deployment**

Modify the deploy script in `package.json`:

```json
"deploy": "gh-pages -d dist -f"
```

Then, run:

```bash
npm run deploy
```

**Solution 2: Delete the Existing `gh-pages` Branch**

If you want to remove the `gh-pages` branch and redeploy:

```bash
git push origin --delete gh-pages
```

Then, run:

```bash
npm run deploy
```

### 3. Branch Not Found Error

If the `gh-pages` branch doesn’t exist locally or remotely but the error persists:

**Solution:**

- Clear cached references:

  ```bash
  git fetch --prune origin
  ```

- Delete the `node_modules` folder and reinstall:

  ```bash
  rm -rf node_modules
  npm install
  ```

- Then, try deploying again:

  ```bash
  npm run deploy
  ```

## Final Notes

- **Ensure Your Project Is Clean**: Commit or stash any changes before deploying.
- **Consistent Node.js Version**: Sometimes discrepancies in Node.js versions can cause issues.
- **Check the Console**: Use browser developer tools to check for any errors if the page doesn't load correctly.
- **Refer to Documentation**:
  - [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
  - [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **Create a Fresh Repository**: If issues persist, consider setting up a new repository to eliminate configuration errors.

---

Feel free to contribute to this guide or raise issues if you encounter any problems not covered here.

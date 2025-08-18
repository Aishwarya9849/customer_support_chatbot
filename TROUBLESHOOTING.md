# Troubleshooting Guide

This guide helps you resolve common issues when setting up and running SupportHub.

## Common Issues and Solutions

### 1. Node.js Not Found

**Error**: `'node.exe' is not recognized as the name of a cmdlet, function, script file, or operable program`

**Solution**: 
- Install Node.js from [https://nodejs.org/](https://nodejs.org/)
- Choose the LTS (Long Term Support) version
- Restart your terminal/command prompt after installation
- Verify installation by running `node --version`

### 2. npm Not Available

**Error**: `npm is not recognized as an internal or external command`

**Solution**:
- Ensure Node.js is properly installed (npm comes with Node.js)
- Restart your terminal after Node.js installation
- If the issue persists, try reinstalling Node.js
- Verify installation by running `npm --version`

### 3. Port Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
- Close other applications using port 3000
- Or change the port in `vite.config.ts`:
  ```typescript
  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3001  // Change to any available port
    }
  })
  ```

### 4. Dependencies Installation Fails

**Error**: `npm install` fails with various errors

**Solutions**:
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- If using corporate network, check proxy settings
- Try using `npm install --legacy-peer-deps`

### 5. TypeScript Compilation Errors

**Error**: TypeScript compilation fails

**Solutions**:
- Ensure all dependencies are installed: `npm install`
- Check TypeScript version compatibility
- Run `npm run lint` to see specific errors
- Verify `tsconfig.json` configuration

### 6. Tailwind CSS Not Working

**Issue**: Styles not applying or Tailwind classes not working

**Solutions**:
- Ensure `src/index.css` contains Tailwind directives
- Verify `tailwind.config.js` content paths
- Check `postcss.config.js` configuration
- Restart development server after configuration changes

### 7. React Router Issues

**Error**: Routes not working or navigation errors

**Solutions**:
- Ensure `react-router-dom` is installed
- Check that all page components exist and are exported
- Verify route paths in `App.tsx`
- Check browser console for JavaScript errors

### 8. Build Errors

**Error**: `npm run build` fails

**Solutions**:
- Fix all TypeScript compilation errors first
- Ensure all imports are correct
- Check for missing dependencies
- Run `npm run lint` to identify issues

### 9. Development Server Won't Start

**Error**: `npm run dev` fails

**Solutions**:
- Check if port 3000 is available
- Ensure all dependencies are installed
- Check for syntax errors in source files
- Verify Vite configuration

### 10. Browser Compatibility Issues

**Issue**: App doesn't work in certain browsers

**Solutions**:
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for JavaScript errors
- Verify that JavaScript is enabled
- Clear browser cache and cookies

## Getting Help

If you're still experiencing issues:

1. **Check the console**: Look for error messages in browser console or terminal
2. **Review logs**: Check terminal output for detailed error information
3. **Verify versions**: Ensure you're using compatible versions of Node.js and npm
4. **Search issues**: Look for similar issues in the project repository
5. **Create issue**: If the problem persists, create a detailed issue report

## System Requirements

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher
- **Browser**: Modern browser with ES6+ support
- **RAM**: Minimum 4GB, recommended 8GB+
- **Disk Space**: At least 1GB free space

## Performance Tips

- Use SSD storage for faster build times
- Close unnecessary applications while developing
- Use Node.js LTS version for stability
- Keep dependencies updated regularly



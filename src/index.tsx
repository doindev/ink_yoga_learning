#!/usr/bin/env node
/**
 * Entry Point for Ink + Yoga Learning Application
 * 
 * This file demonstrates:
 * 1. How to set up an Ink application
 * 2. How to render React components to the terminal
 * 3. The minimal setup required for an Ink app
 */

import React from 'react';
import { render } from 'ink';
import App from './App.js';

/**
 * The render() function is Ink's equivalent to ReactDOM.render()
 * It takes a React component and renders it to the terminal (stdout)
 * 
 * Under the hood, Ink uses:
 * - Yoga layout engine to calculate positions and sizes
 * - ANSI escape codes to draw to the terminal
 * - React reconciliation to update efficiently
 */
render(<App />);

import { deactivateLink } from './functions.js';
import * as tp from './tabPanes.js';

// Activate Disabled Link after Form Submit
deactivateLink();

// Create Tab Pane: Create a New A/B Case
tp.tpCreate();

// Create Tab Pane: Saved Cases
tp.tpSave();
import { Router } from 'express';

const router = Router();

/**
 * Create entity.
 */
router.post('/', (req, res) => {
  res.send('Create endpoint called');
});

/**
 * Read entity.
 */
router.get('/:id', (req, res) => {
  res.send('Read endpoint called');
});

/**
 * Read entities.
 */
router.get('/', (req, res) => {
  res.send('Read endpoint called');
});

/**
 * Update entity.
 */
router.put('/', (req, res) => {
  res.send('Update endpoint called');
});

/**
 * Delete entity.
 */
router.delete('/', (req, res) => {
  res.send('Delete endpoint called');
});

export default router;

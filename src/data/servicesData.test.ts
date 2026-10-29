import test from 'node:test';
import assert from 'node:assert/strict';
import { servicesData, serviceCategories } from './servicesData';

test('Wooden Work category exists and is fully structured', () => {
  const woodenCategory = serviceCategories.find(c => c.id === 'wooden-work');
  assert.ok(woodenCategory, 'Wooden Work category must exist in serviceCategories');
  assert.equal(woodenCategory.id, 'wooden-work');
  assert.ok(woodenCategory.name.toLowerCase().includes('wooden work'));
  assert.equal(woodenCategory.subs.length, 9, 'Wooden Work must have exactly 9 sub-services');

  const expectedSubs = [
    'Kitchen Carpentry',
    'Bespoke Kitchen',
    'Wardrobes & Cupboards',
    'Walk-in Closets',
    'Dressing Rooms',
    'Custom Furniture',
    'Bedroom Furniture',
    'TV Units & Entertainment Units',
    'Outdoor Furniture'
  ];

  expectedSubs.forEach((expectedName, idx) => {
    assert.equal(woodenCategory.subs[idx].name, expectedName, `Subservice ${idx + 1} must match ${expectedName}`);
  });
});

test('All 10 Wooden Work service data entries exist with rich content', () => {
  const allTenKeys = [
    'wooden-work',
    'kitchen-carpentry',
    'bespoke-kitchen',
    'wardrobes-cupboards',
    'walk-in-closets',
    'dressing-rooms',
    'custom-furniture',
    'bedroom-furniture',
    'tv-entertainment-units',
    'outdoor-furniture'
  ];

  for (const key of allTenKeys) {
    const service = servicesData[key];
    assert.ok(service, `servicesData['${key}'] must be defined`);
    assert.ok(service.title && service.title.length > 5, `${key} must have a descriptive title`);
    assert.ok(service.description && service.description.length > 20, `${key} must have a comprehensive description`);
    assert.ok(service.image && (service.image.startsWith('http') || service.image.startsWith('/images/')), `${key} must have a valid image URL`);
    assert.ok(service.material && service.material.length > 0, `${key} must specify materials`);
    assert.ok(service.technician && service.technician.length > 0, `${key} must specify technician`);
    assert.ok(service.warranty && service.warranty.length > 0, `${key} must specify warranty`);
    assert.ok(Array.isArray(service.subServices) && service.subServices.length >= 4, `${key} must have at least 4 subservices/included features`);
    assert.ok(Array.isArray(service.process) && service.process.length >= 3, `${key} must have at least 3 process steps`);
    assert.ok(Array.isArray(service.packages) && service.packages.length >= 1, `${key} must have pricing/quotation packages`);
    assert.ok(Array.isArray(service.faqs) && service.faqs.length >= 4, `${key} must have at least 4 FAQs`);
  }
});

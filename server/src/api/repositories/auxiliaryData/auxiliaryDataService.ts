import { cache } from '../../utils/cache';
import { findManyPermissionsService } from '../permissions/findManyPermissionsService';
import { IAuxiliaryData } from './types';

export async function auxiliaryDataService() {
  let auxiliaryData: IAuxiliaryData | undefined = cache.get('auxiliaryData');

  if (!auxiliaryData) {
    const permissions = await findManyPermissionsService();

    auxiliaryData = { permissions };

    cache.set('auxiliaryData', auxiliaryData);
  }

  return auxiliaryData;
}

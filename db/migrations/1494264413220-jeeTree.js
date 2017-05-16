import { CoreCapacity } from '../../server/data/models/CoreCapacity';
import { jeeTree } from '../data/jeeTree';

/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  jeeTree.forEach((coreCapacity) => {
    this('CoreCapacity').create(coreCapacity);
  })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  this('CoreCapacity').find().remove().exec();
}

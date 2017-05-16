import { CoreCapacity } from '../../server/data/models/CoreCapacity';
import { jeeTree as newJeeTree } from '../data/jeeTree20170515';
import { jeeTree as oldJeeTree } from '../data/jeeTree';

/**
 * Make any changes you need to make to the database here
 */
export async function up () {
  this('CoreCapacity').find().remove().exec();
  newJeeTree.forEach((coreCapacity) => {
    this('CoreCapacity').create(coreCapacity);
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {
  this('CoreCapacity').find().remove().exec();
  oldJeeTree.forEach((coreCapacity) => {
    this('CoreCapacity').create(coreCapacity);
  })
}

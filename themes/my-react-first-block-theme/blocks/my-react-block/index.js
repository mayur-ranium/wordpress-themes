import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType("mytheme/my-react-block", {
    edit: Edit,
    save,
});

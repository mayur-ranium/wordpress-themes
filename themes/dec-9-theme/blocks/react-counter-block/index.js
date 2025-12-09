import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType("my-react-theme-new/counter-block", {
    edit: Edit,
    save,
});

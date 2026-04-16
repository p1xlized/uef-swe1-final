import {createAccessControl} from "better-auth/plugins/access";
import {defaultStatements, adminAc} from "better-auth/plugins/admin/access";

const permissionStatement = {
    ...defaultStatements,

} as const;

export const ac = createAccessControl(permissionStatement);

export const defaultRole = ac.newRole({

})

export const adminRole = ac.newRole(
    {
        ...adminAc.statements
    }
);

export const parentRole = ac.newRole({

});
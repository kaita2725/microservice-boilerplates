import { Model, DataTypes, Optional } from 'sequelize';
import connectDB from '../../config/dbConn';

interface PlaceholderAttributes {
    id: number;
    name: string;
    secret: string;
    deletedAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
    OTHERMODEL?: any
}

interface PlaceholderCreationAttributes extends Optional<PlaceholderAttributes, 'id' | 'deletedAt' | 'createdAt' | 'updatedAt'> { }

class Placeholder extends Model<PlaceholderAttributes, PlaceholderCreationAttributes> implements PlaceholderAttributes {
    public id!: number;
    public name!: string;
    public secret!: string;
    public deletedAt?: Date | null;
    public createdAt?: Date;
    public updatedAt?: Date;
    static associate(models: any) {
        // this.belongsToMany(models.OTHERMODEL1, {
        //     through: models.OTHERMODEL2,
        //     foreignKey: 'PlaceholderId',
        //     onDelete: 'CASCADE',
        //     onUpdate: 'CASCADE',
        // })
    }
    toJSON(): Record<string, any> {
        const values = { ...this.get() } as any;

        // Replace numeric id with formatted string
        values.id = `P-${values.id.toString().padStart(7, '0')}`;
        return values;
    }

    public async yourfunction(foo: string): Promise<any> {
        return
    }
}

Placeholder.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        secret: {
            allowNull: false,
            unique: false,
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: connectDB,
        modelName: "Placeholder",
        tableName: "Placeholders",
        timestamps: true,
        paranoid: true,
        defaultScope: {
            attributes: { exclude: ['secret'] },
        },
        hooks: {
            beforeCreate: async (Placeholder: Placeholder) => {

            },
            beforeSave: async (Placeholder: Placeholder) => {

            }
        }
    }
)


export {
    Placeholder
}
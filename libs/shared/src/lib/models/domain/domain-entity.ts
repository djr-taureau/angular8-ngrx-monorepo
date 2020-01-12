export interface DomainEntityBase {
	guid: string;
}

export interface DomainEntity extends DomainEntityBase {
	timestamps: Timestamps;
}

export interface DomainSubject extends DomainEntityBase {
	displayName: string;
	entityType: string;
}

export interface Timestamps {
	createdOn: Date;
	modifiedOn: Date;
}

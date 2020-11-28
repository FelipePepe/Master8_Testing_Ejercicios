import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

xdescribe('./pods/project', () => {
  it('should return undefined when feeding undefined project', () => {
    const project = undefined;

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return null when feeding undefined project', () => {
    const project = null;

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return expected result by feeding null employee list', () => {
    const project: apiModel.Project = {
      employees: [],
      id: 'test id',
      isActive: false,
      name: 'test name',
      comments: 'test comments',
      externalId: 'test externalId',
    };

    const expectedResult: viewModel.Project = {
      employees: [],
      id: 'test id',
      isActive: false,
      name: 'test name',
      comments: 'test comments',
      externalId: 'test externalId',
    };

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(expectedResult);
  });

  it('should return expecte result by feeding undefined employee list', () => {
    const project: apiModel.Project = {
      employees: undefined,
      id: 'test id',
      isActive: false,
      name: 'test name',
      comments: 'test comments',
      externalId: 'test externalId',
    };

    const expectedResult: viewModel.Project = {
      employees: [],
      id: 'test id',
      isActive: false,
      name: 'test name',
      comments: 'test comments',
      externalId: 'test externalId',
    };

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    const employee: apiModel.Project = {
      id: 'test id',
      isActive: false,
      name: 'test name',
      comments: 'test comments',
      externalId: 'test externalId',
      employees: [
        {
          id: 'test id',
          employeeName: 'test name',
          isAssigned: true,
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      isActive: false,
      name: 'test name',
      comments: 'test comments',
      externalId: 'test externalId',
      employees: [
        {
          id: 'test id',
          employeeName: 'test name',
          isAssigned: true,
        },
      ],
    };

    const result = mapProjectFromApiToVm(employee);

    expect(result).toEqual(expectedResult);
  });
});

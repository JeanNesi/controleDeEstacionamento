import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import axios from "axios";

import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};


function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button sx={{ color: 'green', marginBottom: '20px' }} startIcon={<AddIcon />} onClick={handleClick}>
        Adicionar Cliente
      </Button>
    </GridToolbarContainer>
  );
}

export default function Grid() {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/client')
      .then(response => {
        setRows(response.data);
      });
  }, []);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));

    axios.delete(`http://localhost:8080/api/client/${id}`, 
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    
    axios.post('http://localhost:8080/api/client', {
      "userId": "6fdbe654-95fb-4d06-bb0b-207721d7f2f2",
      "planId": "6fdbe654-95fb-4d06-bb0b-207721d7f2f2",
      "name": newRow.name,
      "phoneNumber": newRow.phoneNumber,
      "cpf": newRow.cpf,
      "gender": newRow.gender,
      "birthDate": "1995-12-05T00:00:00.000Z",
      "createdAt": null,
      "updatedAt": "1995-12-05T00:00:00.000Z"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'name', headerName: 'Nome', width: 240, editable: true },
    {
      field: 'cpf',
      headerName: 'CPF',
      type: 'string',
      width: 180,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'Telefone',
      type: 'string',
      width: 180,
      editable: true,
    },
    {
      field: 'birthDate',
      headerName: 'Data de nascimento',
      width: 180,
      editable: true,
      type: 'string',
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Registrado',
      type: 'string',
      width: 180,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'updatedAt',
      headerName: 'Atualizado',
      type: 'string',
      width: 180,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'gender',
      headerName: 'Gênero',
      type: 'singleSelect',
      width: 180,
      align: 'left',
      headerAlign: 'left',
      editable: true,
      valueOptions: [
        { value: 'Female', label: 'Feminino' },
        { value: 'Male', label: 'Masculino' },
      ],
    },
    {
      field: 'planId',
      headerName: 'Tipo de plano',
      type: 'singleSelect',
      width: 180,
      align: 'left',
      headerAlign: 'left',
      valueOptions: [
        { value: 'semplano', label: 'Sem plano' },
        { value: 'mensal', label: 'Mensal' },
        { value: 'trimestral', label: 'Trimestral' },
        { value: 'semestral', label: 'Semestral' },
        { value: 'anual', label: 'Anual' },
      ],
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      {/* {client.map(clients => {
        return (
          <option key={clients.id} value={clients.id}>{clients.name}</option>
        )
      })} */}
      <Box
        sx={{
          height: '100%',
          width: '100%',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGridPro
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </>
  );
}
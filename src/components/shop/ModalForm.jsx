import React from "react";
import Box from "@mui/material/Box";
import {Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import * as PropTypes from "prop-types";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {
    required,
    validateTelephoneNumber
  } from "../../utils/validators";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm() {
  const {register, handleSubmit, formState: {errors},} = useForm()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => {
    dispatch({handleClose})
}, [dispatch])

  const onSubmit = useCallback((values) => {
    alert('SUBMIT')
    console.log(values)
    dispatch({handleClose})
}, [dispatch])


  return (
    <div>
      <Button onClick={handleOpen} variant = "outlined" style ={{
            marginLeft:'120px', }} >Оформить заявку</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant="h6">Оформления заявки</Typography>
                <form style={{marginTop: '10px'}} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                        variant="outlined"
                        sx={{ mb:2 }}
                        label="Имя"
                        fullWidth
                        autoComplete="name"
                        autoFocus
                        {...register("name", {required:"Required"})}
                        error={!!errors?.name}
                        helperText={errors?.name ? errors.name.message : null}
                    >
                    </TextField>
                    <TextField
                        variant="outlined"
                        sx={{ mb:2 }}
                        label="Номер телефона"
                        fullWidth
                        autoComplete="number"
                        autoFocus
                        {...register("number", {
                            required:"Required",
                            validate: validateTelephoneNumber
                          })}
                        error={!!errors?.number}
                        helperText={errors?.number ? errors.number.message : null}
                        >
                    </TextField>
                    <TextField
                        variant="outlined"
                        sx={{ mb:2 }}
                        label="Эл. почта"
                        fullWidth
                        autoComplete="email"
                        autoFocus
                        {...register("email", {
                            required:"Required",
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                               message:"Invaild email address"
                            },
                          })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    >
                    </TextField>
                               <Select
                                    labelId="demo-simple-select-label"
                                    sx={{ mb:2, mt:2 }}
                                    label="Город"
                                    id="demo-simple-select"
                                    fullWidth
                                    {...register("select", {required:"Required"})}
                                    error={!!errors?.select}
                                    helperText={errors?.select ? errors.select.message : null}
                                >
                                    <MenuItem value={1} selected>Нур-Султан</MenuItem>
                                    <MenuItem value={2}>Алматы</MenuItem>
                                    <MenuItem value={3}>Шымкент</MenuItem>
                                    <MenuItem value={4}>Кызылорда</MenuItem>
                                    <MenuItem value={5}>Актобе</MenuItem>
                                    <MenuItem value={6}>Караганда</MenuItem>
                                    <MenuItem value={7}>Костанай</MenuItem>
                                    <MenuItem value={8}>Актау</MenuItem>
                                    <MenuItem value={9}>Тараз</MenuItem>
                                    <MenuItem value={10}>Семей</MenuItem>
                                    <MenuItem value={11}>Усть-Каменогорск</MenuItem>
                                    <MenuItem value={12}>Павлодар</MenuItem>
                                    <MenuItem value={13}>Атырау</MenuItem>
                                    <MenuItem value={14}>Уральск</MenuItem>
                                </Select>
                    <Button variant="contained"  color="primary" type="submit" style={{marginLeft:'150px'}}>Отправить</Button>
                </form>
        </Box>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, TextField, duration, durationIn } from '@mui/material';
// import SelectInput from '@mui/material/Select/SelectInput';
function Hospital() {
    const [frequencyChip, setFrequencyChip] = useState('');
    const handleFrequencyClick = (frequency) => {
        setFrequencyChip(frequency);
    }
    const [durationchip, setDuration] = useState('');
    const [durationChipIn, setDurationChipIn] = useState('');

    const handleDurationChip = (duration, durationIn) => {
        setDuration(duration);
        setDurationChipIn(durationIn)
    }
    const [instructionChip, setInstructionChip] = useState('');
    const handleInstructionClick = (instruction) => {
        setInstructionChip(instruction);
    }
    const [routeChip, setRouteChip] = useState('');
    const handleRouteClick = (route) => {
        setRouteChip(route);
    }

    return (
        <div>
            <div className='flex justify-between  my-4 space-x-4 mx-4'>
                <div className='border rounded border-slate-400 w-[100%] '>
                    <div className='flex justify-between bg-violet-300 rounded h-12 p-3 '>
                        <div>Frequency</div>
                        <div><AddCircleIcon /></div>
                    </div>
                    <div className='my-4 mx-6'>
                        <Stack direction="row" spacing={1}>
                            <div className='grid grid-cols-6'>
                                <Chip label="1-1-1" variant="outlined" onClick={() => handleFrequencyClick('1-1-1')} />
                                <Chip label="1-1-0" variant="outlined" onClick={() => handleFrequencyClick('1-1-0')} />
                                <Chip label="1-0-0" variant="outlined" onClick={() => handleFrequencyClick('1-0-0')} />
                                <Chip label="0-1-1" variant="outlined" onClick={() => handleFrequencyClick('0-1-1')} />
                                <Chip label="0-0-1" variant="outlined" onClick={() => handleFrequencyClick('0-0-1')} />
                                <button className='bg-red-600 rounded-full  '><Chip label=" MORE " variant="outlined" /></button>

                            </div>
                        </Stack>
                    </div>
                    <div className='my-4 mx-6  border-slate-400'>
                        <FormControl className='w-64 '>
                            <InputLabel>Frequency*</InputLabel>
                            <Select
                                label="Fequency*"
                                value={frequencyChip}
                            >
                                <MenuItem value={'1-1-1'}>1-1-1</MenuItem>
                                <MenuItem value={'1-1-0'}>1-1-0</MenuItem>
                                <MenuItem value={'1-0-0'}>1-0-0</MenuItem>
                                <MenuItem value={'0-1-1'}>0-1-1</MenuItem>
                                <MenuItem value={'0-0-1'}>0-0-1</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='border rounded border-slate-400 w-[100%] '>
                    <div className='flex justify-between bg-blue-300 rounded h-12 p-3 '>
                        <div>Instruction</div>
                        <div><AddCircleIcon /></div>
                    </div>
                    <div>
                        <div className='my-4 mx-6'>
                            <Stack direction="row" spacing={1}>
                                <div className='grid grid-cols-6'>
                                    <Chip label=" Before Sleep" variant="outlined" onClick={() => handleInstructionClick('Before Sleep')} />
                                    <Chip label="..." variant="outlined" onClick={() => handleInstructionClick('...')} />
                                    <Chip label="..." variant="outlined" onClick={() => handleInstructionClick('...')} />
                                    <Chip label="..." variant="outlined" onClick={() => handleInstructionClick('...')} />
                                    <Chip label="..." variant="outlined" onClick={() => handleInstructionClick('...')} />
                                    <Chip label="..." variant="outlined" onClick={() => handleInstructionClick('...')} />

                                </div>
                            </Stack>
                        </div>
                        <div className=' my-4 mx-6 space-x-4'>
                            <FormControl className='w-64'>
                                <InputLabel> Instrauctions*</InputLabel>
                                <Select
                                    label=" Instructions"
                                    value={instructionChip}
                                >
                                    <MenuItem value={'Before Sleep'}> Before Sleep </MenuItem>
                                    <MenuItem value={'...'}>...



                                    </MenuItem>
                                    <MenuItem value={'...'}>...</MenuItem>
                                    <MenuItem value={'...'}>...</MenuItem>
                                    <MenuItem value={'...'}>...</MenuItem>
                                    <MenuItem value={'...'}>... </MenuItem>

                                </Select>
                            </FormControl>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' flex justify-between  my-4 space-x-4 mx-4 '>
                <div className='border rounded border-slate-400 w-[50%] '>
                    <div>
                        <div className='flex justify-between bg-pink-300 rounded h-12 p-3 ' >
                            <div>Duration</div>
                            <span></span>
                        </div>
                        <Stack direction="row" variant="outlined" spacing={1}>
                            <div className='   grid grid-cols-7  gap-3  py-4 px-4   '>
                                <Chip label="1Day" variant="outlined" onClick={() => handleDurationChip('1', 'day')} />
                                <Chip label="2Days" variant="outlined" onClick={() => handleDurationChip('2', 'days')} />
                                <Chip label="3Days" variant="outlined" onClick={() => handleDurationChip('3', 'days')} />
                                <Chip label="4Days" variant="outlined" onClick={() => handleDurationChip('4', 'days')} />
                                <Chip label="5Days" variant="outlined" onClick={() => handleDurationChip('5', 'days')} />
                                <Chip label="6Days" variant="outlined" onClick={() => handleDurationChip('6', 'days')} />
                                <Chip label="1Week" variant="outlined" onClick={() => handleDurationChip('7', 'days')} />
                                <Chip label="15Days" variant="outlined" onClick={() => handleDurationChip('15', 'days')} />
                                <Chip label="1Month" variant="outlined" onClick={() => handleDurationChip('30', 'days')} />
                                <Chip label="Days" variant="outlined" onClick={() => handleDurationChip('', 'days')} />
                                <Chip label="Months" variant="outlined" onClick={() => handleDurationChip('12', 'months')} />
                                <Chip label="Year" variant="outlined" onClick={() => handleDurationChip('365', 'days')} />
                            </div>
                        </Stack>
                        <div className='flex'>
                            <div className='my-4 mx-6  '>
                                <TextField
                                    label='Duration'
                                    value={durationchip}
                                // size='small'
                                />
                            </div>
                            <div className='my-4'>
                                <FormControl className='w-64  '>
                                    <InputLabel>Duration In</InputLabel>
                                    <Select
                                        label="Duration in*"
                                        value={durationChipIn}
                                    // size='small'
                                    >
                                        <MenuItem value={'day'}>day </MenuItem>
                                        <MenuItem value={'days'}>days</MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                        <MenuItem value={'months'}>months </MenuItem>
                                        <MenuItem value={'days'}>days </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded border-slate-400 w-[50%]'>

                    <div className='flex justify-between bg-yellow-300 rounded h-12 p-3 '>
                        <div>Route</div>
                        <div><AddCircleIcon /></div>
                    </div>
                    <div>
                        <div className='space-x-4 mx-4 my-6 '>
                            <Chip label="IM" variant="outlined" onClick={() => handleRouteClick('IM')} />
                            <Chip label="IV" variant="outlined" onClick={() => handleRouteClick('IV')} />
                            <Chip label="LOCAL APPLICATION " variant="outlined" onClick={() => handleRouteClick('LOCAL APPLICATION')} />
                            <Chip label="SC" variant="outlined" onClick={() => handleRouteClick('SC')} />
                            <Chip label="SELECT ROUTE" variant="outlined" onClick={() => handleRouteClick('SELECT ROUTE')} />
                            <button className='bg-red-600 rounded-full'><Chip label=" MORE " variant="outlined" onClick={() => handleRouteClick('MORE')} /></button>
                        </div>
                        <div className='my-6 mx-4 space-x-4 '>
                            <FormControl className='w-64'>
                                <InputLabel>Route*</InputLabel>
                                <Select
                                    label="Route*"
                                    value={routeChip}
                                >
                                    <MenuItem value={'IM'}>IM</MenuItem>
                                    <MenuItem value={'IV'}>IV</MenuItem>
                                    <MenuItem value={'LOCAL APPLICATION'}>LOCAL APPLICATION </MenuItem>
                                    <MenuItem value={'SC'}>SC</MenuItem>
                                    <MenuItem value={'SELECT ROUTE'}>SELECT ROUTE</MenuItem>
                                    <MenuItem value={'MORE'}>MORE</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mx-2 '>
                <div className=' mx-2 my-2 space-x-4 flex    '  >
                    <TextField className='  '
                        label='Duration'
                    />
                    <TextField className=' '
                        label=' Instructions'
                    />
                </div>

                <div className='flex '>
                    <div className='mx-4 space-x-2 '>
                        <TextField type='date'
                        // label='from Date'
                        />
                        <TextField type='Date'
                        // label='To Date'
                        />
                    </div>
                    <div className='flex'>
                        <div className='flex'>
                            <Checkbox /><h3 className='mt-6'>Outside Medicine</h3>
                        </div>

                        <button className='bg-blue-600 rounded p-2 h-10 text-white ml-4 mt-3 w-24'> ADD</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hospital
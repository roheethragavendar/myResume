<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;


class ResumeController extends Controller
{
    protected $configTableEmailTextInfoConnection;

    public function __construct()
    {
        $this->personalDetailsTableConnection = DB::connection('resume')->table('personaldetails');
    }
    public function addPersonalDetails(Request $request)
    {
        $rules = [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'phone' => 'required',
            'email' => 'required|email',
            'city' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'pinCode' => 'nullable|string|max:20',
            'linkedIn' => 'nullable|url',
            'website' => 'nullable|url',
            'userImage' => 'nullable|file|mimes:jpeg,png,jpg'
        ];
    
        $validate = Validator::make($request->all(), $rules);
    
        if ($validate->fails()) {
            return response()->json([
                "status" => "error",
                "message" => $validate->errors()
            ], 422);
        }
    
        try {
            $data = [
                "firstName" => $request->firstName,
                "lastName" => $request->lastName,
                "phone" => $request->phone,
                "email" => $request->email,
                "city" => $request->city,
                "country" => $request->country,
                "pinCode" => $request->pinCode,
                "website" => $request->website,
                "linkedIn" => $request->linkedIn,
            ];
    
            // Handle Image Upload
            if ($request->hasFile('userImage')) {
                $file = $request->file('userImage');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('userImage'), $fileName);
                $data['userImage'] = 'userImage/' . $fileName;
            } else {
                $data['userImage'] = null;
            }
    
            $create = $this->personalDetailsTableConnection->insert($data);
    
            if ($create) {
                return response()->json([
                    "status" => "success",
                    "message" => "PersonalDetails Added Successfully"
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json([
                "status" => "error",
                "message" => $th->getMessage()
            ], 500);
        }
    }
    
}
